package com.cogging.cogging.repository;

import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Plogging;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PloggingRepository extends JpaRepository<Plogging, Integer> {
    List<Plogging> findByPlaceId(int ploggindId);
    List<Plogging> findByMemberIdOrderByCreatedAtDesc(int memberId);
}
