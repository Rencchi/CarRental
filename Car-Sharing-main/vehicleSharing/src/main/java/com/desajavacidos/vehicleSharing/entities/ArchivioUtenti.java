package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "archivioutenti")
public class ArchivioUtenti {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	
	@Column(name = "ultima_modifica")
	@UpdateTimestamp
	private Timestamp ultimaModifica;
	
	@Column(name="user_id", length = 16,nullable = false,unique = true)
	private String userId;
	
	@Column(name="password",length = 50,nullable = false,unique = false)
	private String password;
	
	@Column(name="firma",nullable = true,unique = false)
	private String firma;
	
	@Column(name="tipo",length = 1,nullable = false,unique = false)
	private String tipo;
	
	@Column(name="nome",length = 40,nullable = true,unique = false)
	private String nome;
	
	@Column(name="cognome",length = 40,nullable = true,unique = false)
	private String cognome;
	
	@Column(name="nascita",length = 10,nullable = true,unique = false)
	private String nascita;
	
	@Column(name="email",length = 40,nullable = false,unique = true)
	private String email;
	
	@Column(name = "data_iscrizione")
	@CreationTimestamp
	private Timestamp dataIscrizione;
	
	
	//relazione con l'altra tabella
	
	@JsonIgnore
	 @OneToMany(mappedBy = "archivioutentiId")
	    Set<Prenotazione> prenotazione = new HashSet<Prenotazione>();
	
	
	
	public ArchivioUtenti(String userId, String password, String tipo) {
		super();
		this.userId = userId;
		this.password = password;
		this.tipo = tipo;
	}

	public ArchivioUtenti() {
		// TODO Auto-generated constructor stub
	}

	public Timestamp getUltimaModifica() {
		return ultimaModifica;
	}

	public void setUltimaModifica(Timestamp ultimaModifica) {
		this.ultimaModifica = ultimaModifica;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirma() {
		return firma;
	}

	public void setFirma(String firma) {
		this.firma = firma;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getNascita() {
		return nascita;
	}

	public void setNascita(String nascita) {
		this.nascita = nascita;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Timestamp getDataIscrizione() {
		return dataIscrizione;
	}

	public void setDataIscrizione(Timestamp dataIscrizione) {
		this.dataIscrizione = dataIscrizione;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Set<Prenotazione> getPrenotazione() {
		return prenotazione;
	}

	public void setPrenotazione(Set<Prenotazione> prenotazione) {
		this.prenotazione = prenotazione;
	}
	
	
}
	

	