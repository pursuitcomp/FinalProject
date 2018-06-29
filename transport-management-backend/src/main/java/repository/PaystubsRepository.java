package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Paystubs;
@Repository
public interface PaystubsRepository extends JpaRepository<Paystubs,Integer>{
	

}
