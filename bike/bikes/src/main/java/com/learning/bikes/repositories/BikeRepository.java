package com.learning.bikes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.bikes.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
