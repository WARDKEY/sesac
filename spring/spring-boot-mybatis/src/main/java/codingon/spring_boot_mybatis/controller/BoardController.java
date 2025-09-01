package codingon.spring_boot_mybatis.controller;

import codingon.spring_boot_mybatis.domain.Board;
import codingon.spring_boot_mybatis.dto.BoardDTO;
import codingon.spring_boot_mybatis.dto.FindBoardDTO;
import codingon.spring_boot_mybatis.service.BoardService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping
    public String createBoard(@RequestBody BoardDTO boardDTO) {
        boardService.createBoard(boardDTO);
        return "게시글 추가 완료.";
    }

    @GetMapping("/writer")
    public List<Board> getBoardByWriter(@RequestBody FindBoardDTO findBoardDTO) {
        return boardService.findByWriter(findBoardDTO);
    }

    @GetMapping
    public List<Board> getAllBoards() {
        return boardService.findAllBoards();
    }


    @PutMapping("/{id}")
    public String updateBoard(@PathVariable("id") Long id, @RequestBody BoardDTO boardDTO) {
        boardService.updateBoard(boardDTO, id);
        return "게시글 수정 완료";
    }

    @DeleteMapping("/{id}")
    public String deleteBoard(@PathVariable("id") Long id) {
        boardService.deleteBoard(id);
        return "게시글 삭제 완료";
    }
}
