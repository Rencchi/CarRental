package com.desajavacidos.vehicleSharing.entities;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.CreationTimestamp;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="veicoli")
public class Veicoli {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id",length = 40, nullable = false,unique = false)
	private int id;
	
	@Enumerated(EnumType.STRING)
	@Column(name="tipologia")
	private Veicolo veicolo;
	
	public enum Veicolo{
		AUTO,MONOPATTINO,BICICLETTA;
	}
	@Column(name="modello",nullable=false,unique = false)
	private String modello;
	@Column(name="colore",nullable=false,unique = false)
	private String colore;
	@Column(name="cilindrata",nullable=false,unique = false)
	private String cilindrata;
	
	@Column(name="alimentazione",length = 40, nullable = false,unique = false)
	private String alimentazione;
	
	//descrizione come oggetto, creare relazione tra tabella
	
	
	@Column(name="noleggio_disponibilita",nullable = false,unique = false)
	private Boolean disponibilita;
	
	
	@Column(name="data_inserimento")
	@CreationTimestamp
	private Timestamp dataInserimento;
	
	@Column(name="posizione",nullable = true,unique = false)
	private String posizione;
	@Column(name="noleggio_prolungato",nullable = true,unique = false)
	private Boolean prolungato;
	@Column(name="immagine",nullable = true,unique = false)
	private String immagine;
	
	
	
	
	
	//User Id dell'utente che ha inserito l'informazione
	
	@JsonIgnore
	@OneToMany(mappedBy = "veicoliId")
	private Set<Prenotazione> prenotazione= new HashSet<Prenotazione>();
	
	public Veicoli() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Veicolo getVeicolo() {
		return veicolo;
	}

	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}

	public String getModello() {
		return modello;
	}

	public void setModello(String modello) {
		this.modello = modello;
	}

	public String getColore() {
		return colore;
	}

	public void setColore(String colore) {
		this.colore = colore;
	}

	public String getCilindrata() {
		return cilindrata;
	}

	public void setCilindrata(String cilindrata) {
		this.cilindrata = cilindrata;
	}

	public String getAlimentazione() {
		return alimentazione;
	}

	public void setAlimentazione(String alimentazione) {
		this.alimentazione = alimentazione;
	}

	public Boolean getDisponibilita() {
		return disponibilita;
	}

	public void setDisponibilita(Boolean disponibilita) {
		this.disponibilita = disponibilita;
	}

	public Timestamp getDataInserimento() {
		return dataInserimento;
	}

	public void setDataInserimento(Timestamp dataInserimento) {
		this.dataInserimento = dataInserimento;
	}

	public String getPosizione() {
		return posizione;
	}

	public void setPosizione(String posizione) {
		this.posizione = posizione;
	}

	public Boolean getProlungato() {
		return prolungato;
	}

	public void setProlungato(Boolean prolungato) {
		this.prolungato = prolungato;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	public Set<Prenotazione> getPrenotazione() {
		return prenotazione;
	}

	public void setPrenotazione(Set<Prenotazione> prenotazione) {
		this.prenotazione = prenotazione;
	}

	
	
}