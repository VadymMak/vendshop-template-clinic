import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/ui/ScrollReveal';

const INSURERS = ['vzp', 'cpzp', 'union', 'dovera', 'individual'] as const;

export default async function InsuranceSection() {
  const t = await getTranslations('insurance');

  return (
    <section id="poistenie" className="insurance">
      <ScrollReveal direction="up" className="section-header">
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
        <div className="gold-divider" />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <div className="insurance__badges">
          {INSURERS.map((key) => (
            <span key={key} className="insurance__badge">
              {t(key)}
            </span>
          ))}
        </div>
        <p className="insurance__subtitle">{t('subtitle')}</p>
      </ScrollReveal>
    </section>
  );
}
