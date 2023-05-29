import { NEl } from 'naive-ui'
import BasicTable from './basic-table'
import QueryForm from './query-form'
import { proTableProps } from './typing'
import { useProTableProvider } from '@/components/pro-table/context'
import './styles/index.less'

const ProTable = defineComponent({
  name: 'ProTable',
  props: {
    ...proTableProps
  },
  setup(props, { slots }) {
    useProTableProvider(props)

    return () => {
      const basicTableSlots = {
        empty: slots.empty,
        loading: slots.loading
      }

      return (
        <NEl tag={'div'} class={'pro-table'}>
          <QueryForm />
          <BasicTable {...props} v-slots={basicTableSlots} />
        </NEl>
      )
    }
  }
})

export default ProTable
