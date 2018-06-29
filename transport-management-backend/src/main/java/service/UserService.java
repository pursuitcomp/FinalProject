package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.User;
import repository.StudentRepository;
import repository.UserRepository;
@Service
public class UserService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public void saveUser(User user) {
		//save user
		//userRepository.save(user);
	}
	public User searchByFirstName(String name) {
		return studentRepository.getByName(name);
	}

}
