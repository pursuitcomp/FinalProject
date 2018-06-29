package entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "trips")
public class Trips {
	
	@Transient
	SimpleDateFormat timeSdf = new SimpleDateFormat("HH:mm a");
	@Transient
	SimpleDateFormat dateSdf = new SimpleDateFormat("MM.dd.yyyy");
	
	
	@Id
	@Column(name = "bol")
	private String bol;
	
	@Column(name = "miles")
	private String miles;
	
	@Column(name = "tripstatus")
	private String tripstatus;
	
	@Column(name = "driverid")
	private String driverid;

	@Column(name = "notes")
	private String notes;

	@Column(name = "payamount")
	private double payamount;
	
	@Column(name = "picktime")
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm")
	private String picktime;
	
	@Column(name = "deltime")
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm")
	private String deltime;
	
	@Column(name = "pdate")
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private String pdate;
	
	@Column(name = "ddate")
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private String ddate;
	
	@Column(name = "pcompany")
	private String pcompany;
	
	@Column(name = "dcompany")
	private String dcompany;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address paddress;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address daddress;

	
	public String getDriverid() {
		return driverid;
	}

	public void setDriverid(String driverid) {
		this.driverid = driverid;
	}
	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getBol() {
		return bol;
	}

	public void setBol(String bol) {
		this.bol = bol;
	}

	public String getMiles() {
		return miles;
	}

	public void setMiles(String miles) {
		this.miles = miles;
	}

	public String getTripstatus() {
		return tripstatus;
	}

	public void setTripstatus(String tripstatus) {
		this.tripstatus = tripstatus;
	}

	public double getPayamount() {
		return payamount;
	}

	public void setPayamount(double payamount) {
		this.payamount = payamount;
	}
//picktime
	public String getPicktime() {
		
		return picktime;
	}
	//pickup date
	public String getPdate() {
		return pdate;
	}

	public void setPicktime(String picktime) {
						
			this.picktime = picktime;
		
	}

	public String getDeltime() {
		
		return  deltime;
	}

	public void setDeltime(String deltime) {
		
			this.deltime = deltime;
		
	}

	

	public void setPdate(String pdate) {
		this.pdate = pdate;
	}

	public String getDdate() {
		return ddate;
	}

	public void setDdate(String ddate) {
		
			this.ddate = ddate;
		
	}

	public String getPcompany() {
		return pcompany;
	}

	public void setPcompany(String pcompany) {
		this.pcompany = pcompany;
	}

	public String getDcompany() {
		return dcompany;
	}

	public void setDcompany(String dcompany) {
		this.dcompany = dcompany;
	}

	public Address getPaddress() {
		return paddress;
	}

	public void setPaddress(Address paddress) {
		this.paddress = paddress;
	}

	public Address getDaddress() {
		return daddress;
	}

	public void setDaddress(Address daddress) {
		this.daddress = daddress;
	}

	@Override
	public String toString() {
		return "Trips [picktime=" + picktime + ", deltime=" + deltime + ", pdate=" + pdate + ", ddate=" + ddate + "]";
	}

	

	
}
