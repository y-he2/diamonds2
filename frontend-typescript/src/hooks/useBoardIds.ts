import { useEffect, useState } from 'react';
import { useFetchRepeatedly } from './useFetchRepeatedly';

export function useBoardIds() {
  const delay = 10000; // 10s
  const boards = useFetchRepeatedly(`/api/boards`, delay, []);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const boardIds = boards.map((board: IBoard) => board.id);
    setIds(boardIds);
  }, [boards]);

  return ids;
}

export interface IBoard {
  id: number;
}
