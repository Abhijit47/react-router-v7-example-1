import { AreaChartInteractive } from '~/components/area-chart-interactive';
import { BarChartComponent } from '~/components/bar-chart';
import { LineChartLabel } from '~/components/line-chart-label';
import { RadialChartLabel } from '~/components/radial-chart-label';
import { RadialChartText } from '~/components/radial-chart-text';
import type { Route } from './+types/dashboard-home';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: 'Dashboard | Home',
      description: 'Dashboard Home',
    },
  ];
}

export default function DashboardHomePage() {
  return (
    <div className={'p-4 space-y-4'}>
      <h1>Home</h1>
      <p>Welcome to the dashboard home page.</p>

      <div className={'grid grid-cols-1 lg:grid-cols-3 gap-6'}>
        <div className='rounded-xl bg-muted/50'>
          <RadialChartText />
        </div>
        <div className='rounded-xl bg-muted/50'>
          <RadialChartLabel />
        </div>
        <div className='rounded-xl bg-muted/50'>
          <LineChartLabel />
        </div>
      </div>

      <div>
        <AreaChartInteractive />
      </div>
      <div>
        <BarChartComponent />
      </div>
    </div>
  );
}
