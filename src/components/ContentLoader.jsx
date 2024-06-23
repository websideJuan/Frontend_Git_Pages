import ContentLoader from 'react-content-loader'

const BlogItem = props => (
  <ContentLoader 
    className='bg-transparent'
    viewBox="0 0 900 480"
    seed={1}
    height={280}
    width={100 + '%'}
    backgroundColor="#f3f3f3"
    foregroundColor="#c4c4c405"
    {...props}
    >
    <rect x="3" y="3" rx="10" ry="10" width="100%" height="180%" />
  </ContentLoader>
)

BlogItem.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
}

const ContainerOfContentLoader = () => {
  return (
    <>
      <div className="col-md-12 col-lg-4">
        <BlogItem />
      </div>

      <div className="col-md-12 col-lg-4">
        <BlogItem />
      </div>

      <div className="col-md-12 col-lg-4">
        <BlogItem />
      </div>
    </>
  )
}

export default ContainerOfContentLoader
