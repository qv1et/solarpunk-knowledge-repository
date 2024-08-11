import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SiteLogo({ cfg, fileData }: QuartzComponentProps) {
  const ogImagePath = `static/logo.svg`
  return <div><a class="site-logo-link" href="/"><img class="site-logo" src={ogImagePath} alt="Return to Home Page"></img></a></div>
}
SiteLogo.css = `
.site-logo-link {
  display: block;
  max-width: 150px;
  margin: 0 auto;
}
`

export default (() => SiteLogo) satisfies QuartzComponentConstructor
