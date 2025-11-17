import type { DashboardPropsInterface } from '../../utils/types';
import { StatusSelect } from './StatusSelect';

export function DashboardHeader({ setParams }: DashboardPropsInterface) {
	return (
		<header>
			<StatusSelect setParams={setParams} />
		</header>
	);
}
