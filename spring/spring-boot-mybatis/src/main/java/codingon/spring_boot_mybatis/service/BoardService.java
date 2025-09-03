package codingon.spring_boot_mybatis.service;

import codingon.spring_boot_mybatis.domain.Board;
import codingon.spring_boot_mybatis.dto.BoardDTO;
import codingon.spring_boot_mybatis.dto.FindBoardDTO;
import codingon.spring_boot_mybatis.mapper.BoardMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Service;

@Mapper
@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardMapper boardMapper;

    public void createBoard(BoardDTO boardDTO) {
        boardMapper.createBoard(convertToEntity(boardDTO));
    }

    public List<Board> findByWriter(FindBoardDTO findBoardDTO) {
        return boardMapper.findAllByWriter(findBoardDTO.getWriter());
    }

    public List<Board> findAllBoards() {
        return boardMapper.findAll();
    }

    public void updateBoard(BoardDTO boardDTO, Long id) {
        boardDTO.setId(id);
        boardMapper.updateBoard(boardDTO);
    }

    public void deleteBoard(Long id) {
        boardMapper.deleteBoard(id);
    }

    private Board convertToEntity(BoardDTO boardDTO) {
        Board board = new Board();
        board.setId(boardDTO.getId());
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());
        return board;
    }
}
