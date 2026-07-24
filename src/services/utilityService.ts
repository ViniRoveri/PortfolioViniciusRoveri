const utilityService = {
   getCurrentJobTime(startMonth: number, startYear: number){
      let jobTime =''
      const today = new Date()
      const currentYear = today.getFullYear()
      const currentMonth = today.getMonth() + 1

      let yearsDiff = currentYear - startYear
      let monthDiff = currentMonth - startMonth
      if(monthDiff < 0){
         yearsDiff -= 1
         monthDiff += 12
      }

      if(yearsDiff > 0){
         jobTime = `${yearsDiff} year${yearsDiff > 1 ? 's' : ''}${monthDiff > 0 ? ', ' : ''}`
      }
      if(monthDiff > 0){
         jobTime += `${monthDiff} mo${monthDiff > 1 ? 's' : ''}`
      }

      return jobTime
   }
}

export default utilityService