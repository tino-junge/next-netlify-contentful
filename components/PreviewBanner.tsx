import styled from 'styled-components'

const OffsetPreviewContent = styled.div`
  --preview-banner-height: 48px;
  box-sizing: border-box;
  height: calc(var(--preview-banner-height) + 8px);
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100vw;
  height: var(--preview-banner-height);
  background: white;
  padding: 10;
`

const PreviewBanner = (): JSX.Element => (
  <OffsetPreviewContent>
    <Container>
      <p>
        You are viewing a preview version of the site. Close the banner to return to the live
        version
      </p>
      {/* @ts-ignore theme-ui doesn't change the other props to match the types of the ones given for 'as'  */}
      <Close as="a" href="/api/exit-preview" />
    </Container>
  </OffsetPreviewContent>
)

export default PreviewBanner
