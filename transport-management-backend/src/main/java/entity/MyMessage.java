package entity;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name = "messages")
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

	@Column
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm a")
	private Date date;
	@Transient
	DateFormat df = new SimpleDateFormat("MM/dd/yy HH:mm a");
	@Transient
	Date now = new Date();

	public MyMessage() {
		this.date = now;
	}

	public MyMessage(String body, String smsFrom, String smsTo, boolean author) {
		this.body = body;
		this.smsFrom = smsFrom;
		this.smsTo = smsTo;
		this.author = author;
		this.date = now;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDate() {
		return df.format(date);
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
