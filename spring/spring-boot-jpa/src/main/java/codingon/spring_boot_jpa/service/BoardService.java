package codingon.spring_boot_jpa.service;

import codingon.spring_boot_jpa.dto.BoardDTO;
import codingon.spring_boot_jpa.dto.FindBoardDTO;
import codingon.spring_boot_jpa.dto.UpdateBoardDTO;
import codingon.spring_boot_jpa.entity.Board;
import codingon.spring_boot_jpa.repository.BoardRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public void createBoard(BoardDTO boardDTO) {
        boardRepository.save(convertToEntity(boardDTO));
    }

    public BoardDTO findBoardById(Long id) {
        Board findBoard = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("Board not found"));
        return convertToDto(findBoard);
    }

    public List<BoardDTO> findByWriter(FindBoardDTO findBoardDTO) {
        return boardRepository.findAllByWriter(findBoardDTO.getWriter()).stream().map(this::convertToDto).toList();
    }

    public List<BoardDTO> findAllBoards() {
        return boardRepository.findAll().stream().map(this::convertToDto).toList();
    }

    public void updateBoard(UpdateBoardDTO boardDTO, Long id) {
        Board findBoard = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("Board not found"));
        boardRepository.save(convertToEntityWithBoardId(boardDTO, id, findBoard.getWriter()));
    }

    public void deleteBoard(Long id) {
        boardRepository.findById(id).orElseThrow(() -> new RuntimeException("Board not found"));
        boardRepository.deleteById(id);
    }

    private Board convertToEntity(BoardDTO boardDTO) {
        return Board.builder()
                .id(boardDTO.getId())
                .title(boardDTO.getTitle())
                .content(boardDTO.getContent())
                .writer(boardDTO.getWriter())
                .build();
    }

    private Board convertToEntityWithBoardId(UpdateBoardDTO boardDTO, Long id, String writer) {
        return Board.builder()
                .id(id)
                .title(boardDTO.getTitle())
                .content(boardDTO.getContent())
                .writer(writer)
                .build();
    }

    private BoardDTO convertToDto(Board board) {
        return BoardDTO.builder()
                .id(board.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .build();
    }

}

