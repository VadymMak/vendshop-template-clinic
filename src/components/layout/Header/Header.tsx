'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { WHATSAPP_LINKS } from '@/lib/constants';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Header({ logoUrl, storeName }: { logoUrl?: string; storeName?: string }) {
  const locale = useLocale();
  const t = useTranslations('Header');

  const NAV_LINKS = [
    { href: `/${locale}/#services`,  label: t('servicesServices') },
    { href: `/${locale}/#gallery`,   label: t('servicesGallery') },
    { href: `/${locale}/#team`,      label: t('servicesTeam') },
    { href: `/${locale}/#contact`,   label: t('servicesContact') },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const threshold = 64;

      setScrolled(currentY > 40);

      if (currentY < threshold) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = [
    'header',
    scrolled ? 'header--scrolled' : '',
    visible ? '' : 'header--hidden',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass}>
      <div className="header__inner">
        <Link href="/sk" className="header__logo">
          {logoUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={logoUrl} alt="Logo" className="header__logo-img" />
          ) : (
            <>{storeName ?? 'DentCare'}</>
          )}
        </Link>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
          <a href={`/${locale}/#booking`} className="header__btn-reserve">
            {t('servicesBookNow')}
          </a>
          <a
            href={WHATSAPP_LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="header__btn-whatsapp"
          >
            <WhatsAppIcon size={14} />
            WhatsApp
          </a>
        </nav>

        <button
          className="header__mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {menuOpen && (
          <nav className="header__mobile-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/${locale}/#booking`}
              className="header__mobile-btn-reserve"
              onClick={() => setMenuOpen(false)}
            >
              {t('servicesBookNow')}
            </a>
            <a
              href={WHATSAPP_LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-btn-wa"
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
