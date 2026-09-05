export default function LazyImg({ src, srcSet, alt, className, sizes, eager }) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes || '(max-width: 768px) 100vw, 1400px'}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
