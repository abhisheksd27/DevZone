import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GithubHeatMap = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-900 text-white rounded-lg shadow-md animate-pulse max-w-full overflow-hidden">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">GitHub Contributions</h1>
      <div className="flex justify-center overflow-x-auto">
        <div className="w-full" style={{ maxWidth: '100%' }}>
          <GitHubCalendar 
            username="abhisheksd27"
            blockSize={10}
            blockMargin={2}
            color="hsl(203, 82%, 33%)"
            fontSize={12}
          />
        </div>
      </div>
    </div>
  )
}

export default GithubHeatMap
