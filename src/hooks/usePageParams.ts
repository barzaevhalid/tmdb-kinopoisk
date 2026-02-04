import { useSearchParams } from "react-router-dom";

export function usePageParam(defaultPage = 1) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || defaultPage);

  const setPage = (p: number) => {
    setSearchParams({ page: String(p) });
  };

  return { page, setPage };
}
