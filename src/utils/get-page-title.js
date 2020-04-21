import defaultSettings from '@/settings'
const title=defaultSettings.title||'Vue DDEMO'
export default function getPageTitle(pageTitle){
  return pageTitle?`${pageTitle}-${title}`:title
}