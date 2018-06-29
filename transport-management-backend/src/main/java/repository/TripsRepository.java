package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Trips;
//@Repository
public interface TripsRepository extends JpaRepository<Trips,String>{
	

}
