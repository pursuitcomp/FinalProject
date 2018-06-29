package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Student;
import entity.User;
//@Repository
public interface UserRepository extends JpaRepository<User, String> {
	//find user with email and password to login.
	User findByEmailAndPassword(String email, String password);

}
