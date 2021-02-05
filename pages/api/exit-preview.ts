import type { NextApiHandler } from 'next'

const exitPreview: NextApiHandler = async (request, response) => {
  // Exit the current user from "Preview Mode". This function accepts no args.
  response.clearPreviewData()

  // Redirect the user back to the index page.
  response.writeHead(307, { Location: '/' })
  response.end()
}

export default exitPreview
