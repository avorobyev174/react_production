import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {},
}
const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  userId: '1',
}
export default meta
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${ __API__ }/notifications`,
        method: 'GET',
        status: 200,
        response: [
          { ...notification, id: '1' },
          { ...notification, id: '2' },
        ],
      },
    ],
  },
  decorators: [ StoreDecorator({}) ],
}
