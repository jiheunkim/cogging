package com.cogging.cogging.repository;

import com.cogging.cogging.controller.ReviewController;
import com.cogging.cogging.entity.Place;
import com.cogging.cogging.entity.Plogging;
import com.cogging.cogging.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findAllByPlaceIdOrderByCreatedAtDesc(int placeId);
    List<Review> findByMemberIdOrderByCreatedAtDesc(int memberId);
}
