export type StatsReponseType = {
  userStats: {
    total: number
    weekly: {
      count: number
      increaseadPercent: number
    }
  }
  orderStats: {
    weekly: {
      count: number
      increaseadPercent: number
    }
  }
  salesStats: {
    weekly: {
      total: number
      increaseadPercent: number
    }
  }
}
