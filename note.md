- trigger checker reservasi
- trigger current time booking (melihat mana saja kamar yang ready sama tidak)
- fitur refund
- fitur registrasi


## query trigger laporan harian 

#### pembuatan tabel
``` 
CREATE TABLE LAPORAN_HARIAN (
    ID_LAPORAN      NUMBER PRIMARY KEY,
    ID_TAMU         NUMBER,
    ID_KAMAR        NUMBER,
    TANGGAL_CHECKIN DATE,
    TOTAL_HARGA     NUMBER
);
```
#### pembauatn increment
```
CREATE SEQUENCE SEQ_LAPORAN_HARIAN
START WITH 1
INCREMENT BY 1
NOCACHE;
```
#### membahkan action
```
CREATE OR REPLACE TRIGGER TRG_AI_LAPORAN_HARIAN
BEFORE INSERT ON LAPORAN_HARIAN
FOR EACH ROW
BEGIN
    IF :NEW.ID_LAPORAN IS NULL THEN
        SELECT SEQ_LAPORAN_HARIAN.NEXTVAL INTO :NEW.ID_LAPORAN FROM DUAL;
    END IF;
END;
/

```



