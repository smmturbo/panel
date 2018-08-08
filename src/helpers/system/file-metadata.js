const extractFileMetadata = ({ metadata: { contentType, fullPath, bucket }}) => {

  return {
    bucket,
    contentType,
    fullPath
  }
}

export { extractFileMetadata }
