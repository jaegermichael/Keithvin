import React from 'react';
import { ArrowUpRight, BookOpenCheck, ShieldCheck, UsersRound } from 'lucide-react';
import { AreaChart } from './charts/area-chart';
import { Area } from './charts/area';
import { Grid } from './charts/grid';

const growthData = [
  { date: new Date('2021-01-01'), learners: 84 },
  { date: new Date('2022-01-01'), learners: 112 },
  { date: new Date('2023-01-01'), learners: 148 },
  { date: new Date('2024-01-01'), learners: 186 },
  { date: new Date('2025-01-01'), learners: 224 },
  { date: new Date('2026-01-01'), learners: 268 },
];

const metrics = [
  { icon: UsersRound, value: '268', label: 'Learner capacity' },
  { icon: BookOpenCheck, value: '9', label: 'Learning levels' },
  { icon: ShieldCheck, value: '100%', label: 'Child-centred care' },
];

export const SchoolGrowthSection: React.FC = () => (
  <section className="bg-[#F8FBFF] py-16 sm:py-20" aria-labelledby="growth-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-[#0864B8]/10 bg-[#003F78] text-white shadow-[0_24px_70px_-36px_rgba(0,63,120,0.65)]">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD27A]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                Growing with purpose
              </div>
              <h2 id="growth-heading" className="max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
                A trusted school community, growing year after year.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100 sm:text-base">
                Our measured growth reflects families choosing a balanced education built on strong academics, character and individual care.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {metrics.map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                  <Icon className="mb-3 h-5 w-5 text-[#FFA500]" strokeWidth={2} aria-hidden="true" />
                  <dt className="text-xs font-medium text-blue-100">{label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-white/10 bg-white p-5 text-[#122033] sm:p-8 lg:border-l lg:border-t-0">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0864B8]">Community growth</p>
                <p className="mt-1 font-display text-2xl font-bold">Learners welcomed</p>
              </div>
              <span className="whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">+219% since 2021</span>
            </div>
            <AreaChart
              data={growthData}
              xDataKey="date"
              aspectRatio="1.6 / 1"
              margin={{ top: 18, right: 12, bottom: 18, left: 12 }}
              className="min-h-[240px]"
            >
              <Grid horizontal vertical={false} />
              <Area dataKey="learners" fill="#0864B8" stroke="#0864B8" strokeWidth={3} />
            </AreaChart>
            <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-500" aria-hidden="true">
              {growthData.map((item) => <span key={item.date.toISOString()}>{item.date.getFullYear()}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
