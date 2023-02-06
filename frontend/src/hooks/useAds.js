import { useMemo } from "react"


export const useSortedAds = (ads, sort) => {

  const sortedAds = useMemo(() => {
    if (sort) {
      return [...ads].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return ads
  }, [sort, ads])

  return sortedAds
}


export const useAds = (ads, sort, query) => {
  const sortedAds = useSortedAds(ads, sort)

  const sortedAndSearchedAds = useMemo(() => {
    return ads.filter(ad => ad.book_title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedAds])

  return sortedAndSearchedAds
}