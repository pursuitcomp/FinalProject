package entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	// variables
	@Id
	@Column(name = "email")
	private String email;

	@Column(name = "company")
	private String company;

	@Column(name = "phone")
	private String phone;

	@Column(name = "fname")
	private String fname;

	@Column(name = "lname")
	private String lname;

	@Column(name = "password")
	private String password;

	@Column(name = "role")
	private String role;
	// @Column(name='')

	@OneToOne(cascade = CascadeType.ALL)
	private Address address;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Trips> trips;

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Trips> getTrips() {
		return trips;
	}

	public void setTrips(List<Trips> trips) {
		this.trips = trips;
	}

}
