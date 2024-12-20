import Table from './src/table.mjs';
import ElTableColumn$1 from './src/table-column/index.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install.mjs';

const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);

export { ElTable, ElTableColumn, ElTable as default };
//# sourceMappingURL=index.mjs.map
