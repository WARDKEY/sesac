package codingon.spring_boot_mybatis.mapper;

import codingon.spring_boot_mybatis.domain.Board;
import codingon.spring_boot_mybatis.dto.BoardDTO;
import java.util.List;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface BoardMapper {

    @Insert("INSERT INTO boards (title, content, writer) VALUES (#{title}, #{content}, #{writer})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void createBoard(Board board);

    @Select("SELECT * FROM boards WHERE writer = #{writer}")
    List<Board> findAllByWriter(String writer);

    @Select("SELECT * FROM boards")
    List<Board> findAll();


    @Update("UPDATE boards SET title = #{title}, content = #{content} WHERE id = #{id}")
    void updateBoard(BoardDTO boardDTO);

    @Delete("DELETE FROM boards WHERE id = #{id}")
    void deleteBoard(Long id);
}
