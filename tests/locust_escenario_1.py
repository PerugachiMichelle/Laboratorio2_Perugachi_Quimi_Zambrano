import random

from locust import HttpUser, task, between

class Escenario(HttpUser):
    
    wait_time = between(0.3, 1.0)
    
    #obtener autores
    @task(1)
    def obtener_autores(self):
        with self.client.get("/api/autores", catch_response=True) as response:
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    response.success()
                else:
                    response.failure(
                        "La respuesta no es una lista de autores o está vacía"
                    )
            else:
                response.failure(f"Error al obtener autores: {response.status_code}")
                
     
    #crear Autor           
    @task(2)
    def createAutor(self):
        nuevo_autor = {
            "nombre": f"Nombre Autor {random.randint(1, 1000)}",
            "apellido": "Apellido",
            "fecha_nacimiento": "1990-01-01",
            "nacionalidad": f"nacionalidad {random.randint(100, 999)}",
            "correo_electronico": f"correo{random.randint(101, 1000)}@ejemplo.com",
        }
        self.client.post("/api/autores", json=nuevo_autor)
        
    #Actualizar Autor
    @task(3)
    def updateAutor(self):
        autor_id = random.randint(1, 10)  # Suponiendo que hay autores con IDs del 1 al 10
        updated_data = {
            "nombre": f"Nombre Actualizado {random.randint(1, 1000)}",
            "apellido": "Apellido Actualizado",
            "fecha_nacimiento": "1990-01-01",
            "nacionalidad": f"nacionalidad {random.randint(100, 999)}",
            "correo_electronico": f"correo{random.randint(101, 1000)}@ejemplo.com",
        }
        self.client.put(f"/api/autores/{autor_id}", json=updated_data)
    
    @task(1)
    def root_api(self):
        self.client.get("/")
        
    
    # obtener libros
    @task(1)
    def obtener_libros(self):
        with self.client.get("/api/libros", catch_response=True) as response:
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    response.success()
                else:
                    response.failure("La respuesta no es una lista de libros o está vacía")
            else:
                response.failure(f"Error al obtener libros: {response.status_code}")
        
    
    # crear libro
    @task(2)
    def createLibro(self):
        nuevo_libro = {
            "titulo": f"Libro {random.randint(1, 1000)}",
            "isbn": f"{random.randint(1000, 9999)}",
            "anio_publicacion": random.randint(1900, 2024),
            "edicion": "Primera",
            "autor_id": random.randint(1, 10)
        }
        self.client.post("/api/libros", json=nuevo_libro)
    
    # actualizar libro
    @task(3)
    def updateLibro(self):
        libro_id = random.randint(1, 10)

        updated_data = {
            "titulo": f"Libro actualizado {random.randint(1, 1000)}",
            "isbn": f"{random.randint(1000, 9999)}",
            "anio_publicacion": random.randint(1990, 2024),
            "edicion": "Segunda",
            "autor_id": random.randint(1, 10)
        }
        self.client.put(f"/api/libros/{libro_id}", json=updated_data)
        
    #actualizar usuario
    @task(3)
    def updateUsuario(self):
        usuario_id = random.randint(1, 10)  # Suponiendo que hay usuarios con IDs del 1 al 10
        updated_data = {
            "nombre": f"Nombre Usuario Actualizado {random.randint(1, 1000)}",
            "apellido": "Apellido Usuario Actualizado",
            "correo": f"correo{random.randint(101, 1000)}@ejemplo.com",
            "tipo_usuario": random.choice(["lector", "bibliotecario"])
        }
        self.client.put(f"/api/usuarios/{usuario_id}", json=updated_data)

        