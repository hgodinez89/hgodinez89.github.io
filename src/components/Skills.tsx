// This component is rendered client-only (client:only="react") so
// top-level imports from britecharts and window-dependent helpers are safe.
import React, { useState } from 'react';
import Bar from './charts/bar';
import Colors from '../helpers/colors';
import withResponsiveness from '../helpers/withResponsiveness';
import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';
import barData from '../data/skills/programming';
const ResponsiveBarChart = withResponsiveness(Bar);

interface Props {
  lang: Lang;
}

const COUNT_MAX = 5;
const WIDTH_FULL = 896;

const CHART_KEYS = ['programmingLang', 'webFrameworks', 'databases', 'platforms', 'devTools'] as const;

const CHART_DATA = [
  barData.programmingLanguages,
  barData.webFrameworks,
  barData.databases,
  barData.platforms,
  barData.devTools,
];

export default function Skills({ lang }: Props) {
  const t = useTranslations(lang);
  const [current, setCurrent] = useState(1);

  const commonProps = {
    isHorizontal: true,
    height: 400,
    betweenBarsPadding: 0.3,
    hasPercentage: true,
    colorSchema: Colors.blueGrey,
    margin: { left: 100, right: 40, top: 40, bottom: 40 },
  };

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 id="skills" className="text-4xl font-bold text-center text-gray-800">
        {t('skills')}
      </h2>

      <h2 className="text-xl font-light text-center text-gray-700 mt-20">
        {t(CHART_KEYS[current - 1])}
      </h2>

      <div className="slideshow-container">
        {CHART_DATA.map((getData, i) => {
          const idx = i + 1;
          const isVisible = idx === current;
          return (
            <div key={idx} style={{ display: isVisible ? 'block' : 'none' }}>
              {/* md screens */}
              <div className="max-w-4xl mx-auto hidden md:block lg:hidden">
                <ResponsiveBarChart {...commonProps} data={getData()} width={760} />
              </div>
              {/* sm screens */}
              <div className="max-w-4xl mx-auto md:hidden">
                <ResponsiveBarChart {...commonProps} data={getData()} />
              </div>
              {/* lg+ screens — vertical bars */}
              <div className="max-w-4xl mx-auto hidden lg:block">
                <ResponsiveBarChart
                  {...commonProps}
                  data={getData()}
                  isHorizontal={false}
                  width={WIDTH_FULL}
                />
              </div>
            </div>
          );
        })}

        <button
          className="prev hidden lg:block"
          onClick={() => setCurrent((c) => Math.max(1, c - 1))}
          aria-label="Previous"
        >
          ❮
        </button>
        <button
          className="next hidden lg:block"
          onClick={() => setCurrent((c) => Math.min(COUNT_MAX, c + 1))}
          aria-label="Next"
        >
          ❯
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        {Array.from({ length: COUNT_MAX }, (_, i) => (
          <button
            key={i}
            className={`dot${current === i + 1 ? ' active' : ''}`}
            onClick={() => setCurrent(i + 1)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
