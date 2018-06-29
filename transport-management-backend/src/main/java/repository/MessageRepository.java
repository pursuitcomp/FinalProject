package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.MyMessage;
@Repository
public interface MessageRepository extends JpaRepository<MyMessage,Integer>{

}
