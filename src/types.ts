import { RecommendStatusList } from './constants'

export type RecommendStatus = typeof RecommendStatusList[number] 

export interface Dish {
  name: string,
  diet?: Diet,
  status?: RecommendStatus
}

export interface Restaurant {
  name?: string,
  status?: RecommendStatus,
  dishes?: Dish[]
}

type Diet = 
  |'Вегетаринская'
  | 'Безглютеновая'
  | 'Безлактозная'
  | 'Другое'