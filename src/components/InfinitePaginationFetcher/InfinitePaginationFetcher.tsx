import { useInView } from "react-intersection-observer";

interface InfinitePaginationFetcherProps {
  fetcher: () => void;
}

const InfinitePaginationFetcher = ({
  fetcher,
}: InfinitePaginationFetcherProps) => {
  const [ref] = useInView({
    onChange: (inView) => {
      if (inView) {
        fetcher();
      }
    },
  });

  return <div ref={ref} />;
};

export default InfinitePaginationFetcher;
