package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import entity.Student;
import entity.User;

//@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
//use alias for all
	@Query("Select U from User U where Fname=:name")
	public User getByName(@Param("name")String name);
}
