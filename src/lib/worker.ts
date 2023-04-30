import { WINDOW, usePortalService } from '@meetportal/portal-js'

export default async function main() {
  try {
    const portal = usePortalService()

    const response = await portal.echo('Hello, world!')
    console.log(response)

    portal.subscribe(WINDOW.ON_URL_CHANGE, '*', (url: string) => {
      if (!url) return
      console.log('URL CHANGED:', url)
    })
  } catch (error: any) {
    console.error(error)
  }
}
