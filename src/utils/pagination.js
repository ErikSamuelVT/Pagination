export const next = (currentPage, nPage, setCurrentPage) => {
    if (currentPage >= nPage) return
    setCurrentPage(nextPage => nextPage + 1)
}

export const prev = (currentPage, setCurrentPage) => {
    if (currentPage <= 1) return
    setCurrentPage(nextPage => nextPage - 1)
}
