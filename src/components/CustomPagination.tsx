import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
interface Porps {
  setPage: (page: number) => void;
  total_pages: number;
  page: number;
}
export default function CustomPagination({
  setPage,
  total_pages,
  page,
}: Porps) {
  return (
    <Stack>
      <Pagination
        onChange={(_, value) => setPage(value)}
        color="primary"
        count={total_pages > 500 ? 500 : total_pages}
        page={page}
      />
    </Stack>
  );
}
