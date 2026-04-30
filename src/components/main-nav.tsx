'use client';

import { useEffect, useMemo, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/lib/site-data';

const mobileNavBreakpoint = 1360;

export function MainNav() {
  const pathname = usePathname() ?? '/';
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
  const closeMenuTimeoutRef = useRef<number | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth > mobileNavBreakpoint);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        if (closeMenuTimeoutRef.current) {
          window.clearTimeout(closeMenuTimeoutRef.current);
          closeMenuTimeoutRef.current = null;
        }
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeMenuTimeoutRef.current) {
        window.clearTimeout(closeMenuTimeoutRef.current);
      }
    };
  }, []);

  const isPathActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  const clearCloseMenuTimeout = () => {
    if (closeMenuTimeoutRef.current) {
      window.clearTimeout(closeMenuTimeoutRef.current);
      closeMenuTimeoutRef.current = null;
    }
  };

  const scheduleCloseMenu = (label: string) => {
    clearCloseMenuTimeout();
    closeMenuTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu((current) => (current === label ? null : current));
      closeMenuTimeoutRef.current = null;
    }, 180);
  };

  const activeKey = useMemo(() => {
    const activeItem = navItems.find((item) =>
      item.children?.length ? item.children.some((child) => isPathActive(child.href)) : item.href ? isPathActive(item.href) : false,
    );

    return activeItem?.label ?? null;
  }, [pathname]);

  useEffect(() => {
    if (!isDesktop || !activeKey || !navRef.current) {
      setIndicatorStyle(null);
      return;
    }

    const updateIndicator = () => {
      const activeElement = itemRefs.current[activeKey];
      const navElement = navRef.current;

      if (!activeElement || !navElement) {
        setIndicatorStyle(null);
        return;
      }

      const activeRect = activeElement.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();

      setIndicatorStyle({
        left: Math.round(activeRect.left - navRect.left),
        top: Math.round(activeRect.top - navRect.top),
        width: Math.round(activeRect.width),
        height: Math.round(activeRect.height),
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(navRef.current);

    const activeElement = itemRefs.current[activeKey];
    if (activeElement) {
      resizeObserver.observe(activeElement);
    }

    window.addEventListener('resize', updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeKey, isDesktop]);

  const canUseHover =
    () => typeof window !== 'undefined' && window.innerWidth > mobileNavBreakpoint && window.matchMedia('(hover: hover)').matches;

  const renderItems = (mobile: boolean) =>
    navItems.map((item) => {
      if (item.children?.length) {
        const menuId = `nav-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
        const isActive = item.children.some((child) => isPathActive(child.href));
        const isOpen = openMenu === item.label;

        const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
          if (!mobile && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
            clearCloseMenuTimeout();
            setOpenMenu(null);
          }
        };

        return (
          <div
            key={item.label}
            className={`nav-item nav-item-with-children${isActive ? ' active' : ''}${isOpen ? ' open' : ''}${mobile ? ' nav-item-mobile' : ''}`}
            onBlur={handleBlur}
            onFocus={() => {
              if (!mobile) {
                clearCloseMenuTimeout();
                setOpenMenu(item.label);
              }
            }}
            onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
              if (event.key === 'Escape') {
                clearCloseMenuTimeout();
                setOpenMenu(null);
                itemRefs.current[item.label]?.focus();
              }
            }}
            onMouseEnter={() => {
              if (!mobile && canUseHover()) {
                clearCloseMenuTimeout();
                setOpenMenu(item.label);
              }
            }}
            onMouseLeave={() => {
              if (!mobile && canUseHover()) {
                scheduleCloseMenu(item.label);
              }
            }}
          >
            <button
              aria-controls={menuId}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={`nav-trigger${isActive ? ' active' : ''}${mobile ? ' nav-trigger-mobile' : ''}`}
              ref={(node) => {
                itemRefs.current[item.label] = node;
              }}
              type="button"
              onClick={() => {
                clearCloseMenuTimeout();
                setOpenMenu((current) => (current === item.label ? null : item.label));
              }}
            >
              {item.label}
              <span className="nav-caret" aria-hidden="true">
                ▾
              </span>
            </button>

            <div className={`nav-menu-panel${mobile ? ' nav-menu-panel-mobile' : ''}`} id={menuId} role="menu">
              {item.children.map((child) => {
                const isChildActive = isPathActive(child.href);
                return (
                  <Link
                    key={child.href}
                    className={`nav-menu-link${isChildActive ? ' active' : ''}`}
                    href={child.href}
                    role="menuitem"
                    onClick={() => {
                      clearCloseMenuTimeout();
                      setOpenMenu(null);
                      setMobileOpen(false);
                    }}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      }

      const isActive = item.href ? isPathActive(item.href) : false;
      return (
        <Link
          key={item.label}
          className={`nav-link${isActive ? ' active' : ''}${mobile ? ' nav-link-mobile' : ''}`}
          href={item.href ?? '/'}
          ref={(node) => {
            itemRefs.current[item.label] = node;
          }}
          onClick={() => {
            clearCloseMenuTimeout();
            setOpenMenu(null);
            setMobileOpen(false);
          }}
        >
          {item.label}
        </Link>
      );
    });

  if (!isDesktop) {
    return (
      <nav ref={navRef} className={`main-nav main-nav-mobile${mobileOpen ? ' mobile-open' : ''}`} aria-label="Primary">
        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className={`nav-mobile-toggle${mobileOpen ? ' active' : ''}`}
          type="button"
          onClick={() => {
            clearCloseMenuTimeout();
            setMobileOpen((current) => !current);
            if (mobileOpen) {
              setOpenMenu(null);
            }
          }}
        >
          <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars-staggered'}`} aria-hidden="true" />
        </button>

        <div className="nav-mobile-panel">
          {renderItems(true)}
        </div>
      </nav>
    );
  }

  return (
    <nav ref={navRef} className="main-nav" aria-label="Primary">
      {indicatorStyle ? (
        <div
          className="nav-active-indicator"
          style={{
            transform: `translate3d(${indicatorStyle.left}px, ${indicatorStyle.top}px, 0)`,
            width: indicatorStyle.width,
            height: indicatorStyle.height,
          }}
        />
      ) : null}
      {renderItems(false)}
    </nav>
  );
}
