package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="expenses")
public class Expenses {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eId;
	@Column
	private Double repair;
	@Column
	private Double toll;
	@Column
	private Double fuel;
	@Column
	private Double insurance;
	@Column
	private Double maintenance;
	@Column
	private Double dispacher;
	
	
	public int geteId() {
		return eId;
	}
	public void seteId(int eId) {
		this.eId = eId;
	}
	public Double getRepair() {
		return repair;
	}
	public void setRepair(Double repair) {
		this.repair = repair;
	}
	public Double getToll() {
		return toll;
	}
	public void setToll(Double toll) {
		this.toll = toll;
	}
	public Double getFuel() {
		return fuel;
	}
	public void setFuel(Double fuel) {
		this.fuel = fuel;
	}
	public Double getInsurance() {
		return insurance;
	}
	public void setInsurance(Double insurance) {
		this.insurance = insurance;
	}
	public Double getMaintenance() {
		return maintenance;
	}
	public void setMaintenance(Double maintenance) {
		this.maintenance = maintenance;
	}
	public Double getDispacher() {
		return dispacher;
	}
	public void setDispacher(Double dispacher) {
		this.dispacher = dispacher;
	}
	
	
	

}
