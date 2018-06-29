package entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity(name="messages")
public class MyMessage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mId;
	@Column
	private String body;
	@Column
	private String smsFrom;
	@Column
	private String smsTo;
	@Column
	private boolean author;
	private Date date;
	
	
	

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public MyMessage() {
		
	}

	public MyMessage(String body, String smsFrom, String smsTo, boolean author) {
		this.body = body;
		this.smsFrom = smsFrom;
		this.smsTo = smsTo;
		this.author = author;
	}

	public String getSmsFrom() {
		return smsFrom;
	}

	public void setSmsFrom(String smsFrom) {
		this.smsFrom = smsFrom;
	}

	public String getSmsTo() {
		return smsTo;
	}

	public void setSmsTo(String smsTo) {
		this.smsTo = smsTo;
	}

	public boolean isAuthor() {
		return author;
	}

	public void setAuthor(boolean author) {
		this.author = author;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public int getmId() {
		return mId;
	}

	public void setmId(int mId) {
		this.mId = mId;
	}
	
	



}
