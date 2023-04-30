import { APP, Badge, usePortalService } from '@meetportal/portal-js'

export default async function main() {
  const portal = usePortalService()

  // console.log(portal.$('<div id="hi">hello</div>').querySelector('#hi')?.innerHTML.toString())

  // portal.subscribe(WINDOW.ON_URL_CHANGE, 'test', (url: string) => {
  //   console.log('🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️ url', url)
  // })

  const badge: Badge = {
    show: true,
    text: '2',
    color: '#f204d9',
  }
  portal.sendRequest(APP.SET_BADGE, badge)

  portal.pushNotification({
    title: 'Please follow up with Nancy',
    text: 'Nancy needs a follow up appointment.',
    data: {
      patientId: '6',
    },
  })
}

main()
