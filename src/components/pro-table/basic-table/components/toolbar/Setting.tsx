import { SettingOutlined } from '@vicons/antd'
import type { DropdownOption } from 'naive-ui'
import { NButton, NDropdown, NIcon, NTooltip } from 'naive-ui'
import SettingBody from './SettingBody'
import SettingHeader from './SettingHeader'

const Setting = defineComponent({
  name: 'Setting',
  setup() {
    return () => {
      const dropdownOptions: DropdownOption[] = [
        {
          type: 'render',
          key: 'header',
          render: () => {
            return <SettingHeader />
          }
        },
        {
          key: 'header-divider',
          type: 'divider'
        },
        {
          key: 'body',
          type: 'render',
          render: () => {
            return <SettingBody />
          }
        }
      ]

      const tooltipSlots = {
        trigger: () => (
          <div>
            <NDropdown trigger={'click'} options={dropdownOptions}>
              <NButton text>
                <NIcon size={'18'} class={'cursor-pointer'}>
                  <SettingOutlined />
                </NIcon>
              </NButton>
            </NDropdown>
          </div>
        )
      }

      return (
        <NTooltip v-slots={tooltipSlots}>
          <span>设置</span>
        </NTooltip>
      )
    }
  }
})

export default Setting
