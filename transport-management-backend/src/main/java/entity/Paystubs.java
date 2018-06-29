package entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Paystubs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pId;
	@OneToOne(cascade=CascadeType.ALL)
	private Expenses expense;
	@Column
	private String driverId;
	@Column
	private Double totalPay;
	@Column
	private Double totalExpenses;
	
	public Double getTotalExpenses() {
		return totalExpenses;
	}
	public void setTotalExpenses(Double totalExpenses) {
		this.totalExpenses = totalExpenses;
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public Expenses getExpense() {
		return expense;
	}
	public void setExpense(Expenses expense) {
		this.expense = expense;
	}
	public String getDriverId() {
		return driverId;
	}
	public void setDriverId(String driverId) {
		this.driverId = driverId;
	}
	public Double getTotalPay() {
		return totalPay;
	}
	public void setTotalPay(Double totalPay) {
		this.totalPay = totalPay;
	}
	
	

	
}
